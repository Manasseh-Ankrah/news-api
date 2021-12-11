const dbConfig = async () => {
  try {
    const connection_url =
      "mongodb+srv://Manasseh:Manasseh44@cluster0.1mmji.mongodb.net/blog?retryWrites=true&w=majority";

    mongoose.connect(connection_url, {
      useNewURLParser: true,
      //   useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("connected to Database");
  } catch (error) {
    console.log(error);
  }
};
