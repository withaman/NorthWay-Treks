import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Trek from "@/models/Trek";


// =======================
// GET ALL TREKS
// =======================

export async function GET() {

  try {

    await connectDB();

    const treks = await Trek.find()
      .sort({
        createdAt: -1,
      });


    return NextResponse.json({
      success: true,
      treks,
    });


  } catch (error) {

    console.error("GET TREKS ERROR:", error);


    return NextResponse.json(
      {
        success:false,
        message:"Failed to fetch treks",
      },
      {
        status:500,
      }
    );

  }

}



// =======================
// CREATE TREK
// =======================


export async function POST(request){

  try {


    await connectDB();


    const body = await request.json();



    // Check duplicate slug

    const exists = await Trek.findOne({
      slug: body.slug,
    });



    if(exists){

      return NextResponse.json(
        {
          success:false,
          message:"Slug already exists",
        },
        {
          status:400,
        }
      );

    }



    const trek = await Trek.create(body);



    return NextResponse.json(
      {
        success:true,
        message:"Trek created successfully",
        trek,
      },
      {
        status:201,
      }
    );



  } catch(error){


    console.error(
      "CREATE TREK ERROR:",
      error
    );


    return NextResponse.json(
      {
        success:false,
        message:error.message,
      },
      {
        status:500,
      }
    );


  }


}