// src/components/RedirectPage.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortened') || '[]');
    const item = data.find((d) => d.code === shortcode);
    if (item) {
      // Logging middleware
      fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'REDIRECT',
          shortcode,
          original: item.original,
          time: new Date().toISOString(),
        }),
      });

      window.location.href = item.original;
    } else {
      navigate('/');
    }
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
