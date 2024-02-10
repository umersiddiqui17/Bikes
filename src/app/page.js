
import Featured from "@/components/Featured";
import ProductSearch from "@/components/Search";
import Newest from "@/components/Newest";
import Video from "@/components/Video";



export default function Home() {
  return (
    <div className="">
      
      <div className="h-[460px] object-cover  ">
        <Video/>
      </div>
      <Newest/>
      <Featured/>
      
      
    </div>
  );
}
