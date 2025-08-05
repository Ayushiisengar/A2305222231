
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("shortened") || "[]");
    const item = data.find((d) => d.code === shortcode);
    if (item) {
      fetch("http://20.244.56.144/evaluation-service/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stack: "backend",
          level: "error",
          package: "handler",
          message: "received string, expected bool",
        }),
      });

      window.location.href = item.original;
    } else {
      navigate("/");
    }
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
