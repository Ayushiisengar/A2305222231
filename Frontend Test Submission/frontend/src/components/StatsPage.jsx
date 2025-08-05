
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

const StatsPage = () => {
  const { shortcode } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortened') || '[]');
    const item = data.find((d) => d.code === shortcode);
    if (item) {
      setInfo(item);
    }
  }, [shortcode]);

  return (
    <Box p={4}>
      {info ? (
        <>
          <Typography variant="h4">Stats for {shortcode}</Typography>
          <Typography variant="body1">Original URL: {info.original}</Typography>
          <Typography variant="body1">Short URL: {info.short}</Typography>
        </>
      ) : (
        <Typography variant="h6">No data found for {shortcode}</Typography>
      )}
    </Box>
  );
};

export default StatsPage;
