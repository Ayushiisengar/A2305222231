import { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState(null);

  const handleShorten = async () => {
    if (!url.startsWith("http")) {
      alert("Enter a valid URL");
      return;
    }

    const shortcode = Math.random().toString(36).substring(2, 7);
    const shortUrl = `${window.location.origin}/${shortcode}`;
    setShortened(shortUrl);

    const data = JSON.parse(localStorage.getItem("shortened") || "[]");
    data.push({ original: url, short: shortUrl, code: shortcode });
    localStorage.setItem("shortened", JSON.stringify(data));

    await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stack: "backend",
        level: "error",
        package: "handler",
        message: "received string, expected bool",
      }),
    });
  };

  return (
    <Box p={4}>
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          URL Shortener
        </Typography>
        <TextField
          label="Enter URL"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleShorten}>
          Shorten
        </Button>

        {shortened && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            Shortened URL: <a href={shortened}>{shortened}</a>
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Home;
