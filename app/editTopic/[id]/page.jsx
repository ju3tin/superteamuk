"use client"
import EditTopicForm from "../../../components/EditTopicForm";
import React, { useState, useEffect } from 'react';

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { topic: fetchedTopic } = await getTopicById(params.id);
        if (fetchedTopic) {
          setTitle(fetchedTopic.title);
          setDescription(fetchedTopic.description);
        } else {
          setError("Failed to fetch topic");
        }
      } catch (error) {
        console.log("Error loading topic: ", error);
        setError("Failed to fetch topic");
      }
    };

    fetchData();
  }, [params.id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <EditTopicForm
      id={params.id}
      title={title}
      description={description}
      onTitleChange={handleTitleChange}
      onDescriptionChange={handleDescriptionChange}
    />
  );
}