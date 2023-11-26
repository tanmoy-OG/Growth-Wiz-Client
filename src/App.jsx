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
import Parent from "./pages/Parent";
import Child from "./pages/Child";
import Blogs from "./pages/Blogs";
import Videos from "./pages/Videos";

function App() {
  // const [count, setCount] = useState(0)
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/parent" Component={Parent} />
          <Route path="/child" Component={Child} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/videos" Component={Videos} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
