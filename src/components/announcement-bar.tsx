import Image from 'next/image';

export function AnnouncementBar() {
  return (
    <div className="bg-white">
      <Image
        src="https://res.cloudinary.com/dyx7of5zc/image/upload/v1769073627/Untitled_design_73_zuab8h.jpg"
        alt="Republic Day Sale"
        width={1920}
        height={100}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
