export default async function handler(req,res){

  const query =
  req.query.q || "wallpaper";

  try{

    const response =
    await fetch(

      `https://api.pexels.com/v1/search?query=${query}&per_page=80&page=1`,

      {
        headers:{
          Authorization:
          process.env.PEXELS_API_KEY
        }
      }

    );

    const data =
    await response.json();

    res.status(200).json(data);

  }catch(err){

    res.status(500).json({
      error:"Something went wrong"
    });

  }

}
