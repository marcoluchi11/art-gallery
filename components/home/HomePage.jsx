import DownloadButton from "../DownloadButton";
import HomeCollage from "./HomeCollage";
export default function Homepage() {
  return (
    <>
      <div className="max-w-[1366px]">
        <div className="">
          {/* <HomeImages /> */}
          <DownloadButton />
          <HomeCollage />
        </div>

        <DownloadButton />
      </div>
    </>
  );
}
