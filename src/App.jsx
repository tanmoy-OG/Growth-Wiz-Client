import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Plans from "./pages/Plans";
import AboutUs from "./pages/AboutUs";
import Parent from "./pages/Parent";
import Child from "./pages/Child";
import Videos from "./pages/Videos";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/plans" Component={Plans} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/parent" Component={Parent} />
          <Route path="/child" Component={Child} />
          <Route path="/videos" Component={Videos} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
