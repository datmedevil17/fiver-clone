"use client";
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 4,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 1.8,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    radius: 100,
    maxSpeed: 0.03,
    minSpeed: 0.01,
    // dragControl: false,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 32,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then((response) => {
        if (response && response.simpleIcons) {
          setData(response);
        } else {
          console.error('Invalid response from fetchSimpleIcons', response);
        }
      })
      .catch((error) => console.error('Error fetching icons:', error));
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data || !data.simpleIcons) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'dark')
    );
  }, [data, theme]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}

export default IconCloud;
