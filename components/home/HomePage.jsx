import DownloadButton from "../DownloadButton";
import HomeImages from "./HomeImages";
export default function Homepage() {
  return (
    <>
      <div className="max-w-[1366px]">
        <div className="mb-20">
          <DownloadButton text="text-3xl" />
          <HomeImages />
        </div>

        <DownloadButton text="text-3xl" />
      </div>
    </>
  );
}
