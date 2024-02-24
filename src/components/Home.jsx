import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPost from "./AddPost";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import loading_gif from "../assets/loading.gif";

function Home({ searchtext }) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [id, setId] = useState(null);
  const [noteText, setnoteText] = useState("");
  const [noteTitle, setnoteTitle] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let top10 = data.slice(0, 10);
      setContent(top10);

      setLoading(false);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  const edit = (item) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Optional smooth scrolling behavior
    });
    setId(item.id);
    setnoteText(item.body);
    setnoteTitle(item.title);
  };

  const handleDelete = (id) => {
    const newContent = content.filter((it) => it.id !== id);
    setContent(newContent);
  };

  const handleEdit = () => {
    if (id != null) {
      if (!noteText || !noteTitle) alert("Please enter title and text");
      content.map((it) => {
        if (it.id === id) {
          it.body = noteText;
          it.title = noteTitle;
        }
      });
      setnoteText("");
      setnoteTitle("");
      setContent([...content]);
      setId(null);
    } else {
      const newPost = {
        title: noteTitle,
        body: noteText,
        id: content.length + 1,
      };
      content.push(newPost);
      setContent([...content]);
      setnoteText("");
      setnoteTitle("");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center  min-h-screen w-full mt-4 bg-white">

        {loading ? (
          <img src={loading_gif} className=" w-[30%] h-[30%] " alt="" />
        ) : (
           <div className="w-[90%]   grid grid-cols-auto-fit gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white mb-6 ">
            {
             content
            .filter((note) => note.title.toLowerCase().includes(searchtext))
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-[#fef68a] hover:bg-[#f6ed75] rounded-10 p-4 min-h-170  flex flex-col justify-between  rounded-lg"
                >
                  <div>
                    <div class="text-gray-900 font-bold text-xl mb-1">  {item.title}</div>
                   
                    <p class="text-gray-700 text-base">{item.body}</p>
                  </div>
                 
                  <div className="flex justify-between ">
                    <BiSolidEdit
                      className="text-black cursor-pointer"
                      onClick={() => edit(item)}
                    />
                    <MdDelete
                      className="text-black cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    ></MdDelete>
                  </div>
                </div>
              );
            })
          }
           <AddPost
          handleEdit={handleEdit}
          noteText={noteText}
          noteTitle={noteTitle}
          id={id}
          setnoteText={setnoteText}
          setnoteTitle={setnoteTitle}
        />
            </div>
        )}  
       
  
    </div>
  );
}

export default Home;
