import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Trek from "@/models/Trek";



// =======================
// GET SINGLE TREK
// =======================

export async function GET(
    request,
    context
) {

    try {

        const { id } = await context.params;


        await connectDB();


        const trek = await Trek.findById(id);



        if (!trek) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Trek not found",
                },
                {
                    status: 404,
                }
            );

        }



        return NextResponse.json({

            success: true,
            trek,

        });



    } catch (error) {


        console.log("GET SINGLE TREK ERROR:", error);


        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 500,
            }
        );


    }

}





// =======================
// UPDATE TREK
// =======================


export async function PUT(
    request,
    context
) {

    try {


        const { id } = await context.params;


        const body = await request.json();


        await connectDB();



        const trek = await Trek.findByIdAndUpdate(
            id,
            body,
            {
                new: true,
                runValidators: true,
            }
        );



        if (!trek) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Trek not found",
                },
                {
                    status: 404,
                }
            );

        }



        return NextResponse.json({

            success: true,
            message: "Trek updated successfully",
            trek,

        });



    } catch (error) {


        console.log(
            "UPDATE TREK ERROR:",
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







// =======================
// DELETE TREK
// =======================


export async function DELETE(
    request,
    context
) {

    try {


        const { id } = await context.params;


        await connectDB();



        const trek = await Trek.findByIdAndDelete(id);



        if (!trek) {


            return NextResponse.json(
                {
                    success:false,
                    message:"Trek not found",
                },
                {
                    status:404,
                }
            );


        }



        return NextResponse.json({

            success:true,
            message:"Trek deleted successfully",

        });



    } catch(error) {


        console.log(
            "DELETE TREK ERROR:",
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