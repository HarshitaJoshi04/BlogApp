import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // always runs
      }
    };

    fetchPosts();
  }, []);

  // 1️⃣ Show loader while fetching
  if (loading) {
    return (
      <div className="w-full py-16 text-center">
        <p className="text-lg font-medium text-gray-600">Loading posts...</p>
      </div>
    );
  }

  // 2️⃣ No posts after loading finishes
  if (posts.length === 0) {
    return (
      <div className="w-full py-16 mt-4 text-center">
        <Container>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Blogify
              </span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg md:text-xl">
              Login to explore thoughtful stories and ideas.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  // 3️⃣ Posts exist
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;