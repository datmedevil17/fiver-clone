'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const response = await fetch('/admin/submissions'); // API route you created earlier
        const data = await response.json();

        if (response.ok) {
          setSubmissions(data);  // Store the fetched submissions in state
        } else {
          setError(data.error || 'Failed to fetch submissions');
        }
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      }
    }

    fetchSubmissions();
  }, []); // Fetch on component mount

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <h2>Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{submission.description}</td>
                <td>{new Date(submission.submittedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
