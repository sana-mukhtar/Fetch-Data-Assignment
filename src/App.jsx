import { useEffect, useState } from "react";
import { fetchPosts } from "./api";
import {
  Container,
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //re-render data 
  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  //filter according to search function
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>

    {/* heading */}
      <Typography variant="h4" component="h1" style={{ textAlign: "center" }}>
        Posts
      </Typography>


      {/* search box */}
      <TextField
        sx={{ background: "white" }}
        label="search here..."
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* fetched data displays here */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4}>
        {filteredPosts.map((post) => (
          <Card key={post.id} sx={{ width: 300, margin: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default App;
