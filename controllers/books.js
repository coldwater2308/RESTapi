const { getBooks, getBook, insertBook,updateBook,deleteBook } = require("../models/books")

exports.getBooks= async(req,res,next)=>{

await getBooks().then(value=>res.status(200).json({message:"Success",data:value})).catch(err=>res.status(203).json({message:err,data:{}}))

} 
exports.getBook= async(req,res,next)=>{ 
    const id= req.params.id;
    await getBook(id).then(value=>res.status(200).json({message:"Success",data:value})).catch(err=>res.status(203).json({message:err,data:{}}))

} 
exports.createBook= async(req,res,next)=>{

    await insertBook(req.body).then(value=>res.status(200).json({message:"Success",data:value})).catch(err=>res.status(203).json({message:err,data:{}}))

} 
exports.updateBook= async(req,res,next)=>{
    const id= req.params.id;
  
await updateBook(id,req.body).then(value=>res.status(200).json({message:"Success",data:value})).catch(err=>res.status(203).json({message:err,data:{}}))

}  
exports.deleteBook=async(req,res,next)=>{
    const id= req.params.id;
    await deleteBook(id).then(value=>res.status(200).json({message:value})).catch(err=>res.status(203).json({message:err}))


}