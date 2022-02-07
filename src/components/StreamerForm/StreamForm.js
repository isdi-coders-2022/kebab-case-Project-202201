const StreamerForm = () => {
  return (
    <>
      <form className="form-data ">
        <div className="form-block ">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
        </div>
        <div className="form-block ">
          <label htmlFor="imageImput">Image: </label>
          <input
            type="imageImput"
            id="imageImput"
            placeholder="image"
            onChange={(event) => setImage(event.target.value)}
            value={Image}
          />
        </div>
        <div className="form-block">
          <label htmlFor="Description">Description: </label>
          <input
            type="Description"
            id="description"
            placeholder="Description"
            value={Description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </form>
    </>
  );
};
export default StreamerForm;
