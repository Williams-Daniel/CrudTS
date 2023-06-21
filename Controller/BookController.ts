import { Request, Response } from "express";
import BookModel from "../Model/BooksModel";

export const postBook = async (req: Request, res: Response) => {
  try {
    const { title, author, description, category } = req.body;

    const newBook = await BookModel.create({
      title,
      author,
      coverImage:title.charAt(0).toUpperCase(),
      description,
      views:[],
      category,
    });

    return res.status(201).json({
        message:"Book uploaded successfully",
        data: newBook
    })
  } catch (error) {
    return res.status(404).json({
        message:"an error occured while uploding",
        data:error
    })
  }
};


export const viewOneBook = async(req:Request,res:Response)=>{
    try {
        const {bookID} = req.params
        const  singleBook = await BookModel.findById(bookID)

        return res.status(200).json(
            {
                message:"succesfully gotten this book",
                data:singleBook
            }
            
        )
    } catch (error) {
        return res.status(404).json({
            message:"couldn't get this book",
            data:error
        })   
    }
}

export const viewAllBooks = async(req:Request,res:Response) =>{
try {
const AllBooks = await BookModel.find().sort({createdAt:-1})
res.status(200).json({
    message:`successfully gotten all ${AllBooks.length} books(s)`,
    data:AllBooks
})
} catch (error) {
    return res.status(404).json({
        message:"cannot get all books",
        data:error
    })
}
}