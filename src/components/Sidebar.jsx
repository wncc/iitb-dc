import { FaExternalLinkAlt } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="text-textColor relative min-h-screen p-2 max-w-[600px] w-96 bg-secondary rounded-tr-xl">
      <div className="flex flex-col">
        <div className="container mx-auto px-4 bg-primary py-2 rounded-xl my-1">
        <h1 className="text-xl font-semibold"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdelpls6azttFA1XBbC5k7u8kId_dHGwFDRSP6qUO7d6J8RhQ/viewform">Post Confession</a></h1>
        </div>
        <div className="container mx-auto px-4 bg-primary py-2 rounded-xl my-1">
          <h1 className="text-xl font-semibold">Trending</h1>
        </div>
        <div className="container mx-auto px-4 bg-primary py-2 rounded-xl my-1">
          <h1 className="text-xl font-semibold">Latest</h1>
        </div>
      </div>

      <div className="flex flex-col container mx-auto px-4 bg-primary py-2 rounded-xl my-2">
        <h1 className="text-xl font-semibold">Categories</h1>
        <div className='py-1'>Crushes & Heartbreaks ❤️</div>
        <div className='py-1'>Acad BT</div>
        <div className='py-1'>Admin Frustration</div>
        <div className='py-1'>Gyan Dedo pls</div>
        <div className='py-1'>Respekt 🖖</div>
      </div>
      <div className="flex flex-col container mx-auto px-4 bg-primary py-2 rounded-xl my-3">
      <h1 className="text-xl font-semibold">Popular Tags</h1>
        <div className='py-1'>#LifeisTrash</div>
        <div className='py-1'>#ReSoUrCeCoNsTrAiNt</div>
        <div className='py-1'>#ReopenCampus</div>
      </div>
    </div>
  );
};

export default Sidebar;
