// Import necessary modules and models
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

import { NextResponse } from "next/server";


// GET endpoint to fetch a topic by ID
export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const topic = await Topic.findById(id);

    if (!topic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT endpoint to update a topic by ID
export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();

  try {
    await connectMongoDB();
    const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });

    if (!updatedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic updated", topic: updatedTopic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}