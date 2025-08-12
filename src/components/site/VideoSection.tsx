const VideoSection = () => {
  return (
    <section className="container mx-auto px-4 mt-10 md:mt-16">
      <div className="rounded-xl overflow-hidden border bg-card">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/63ca74be7d71b6c128d7ac1e/63e611a7b8870e0703058b51_63e60d457589495064407036_Solar%20Energy%20on%20the%20farm-poster-00001.jpeg"
          style={{ width: "100%", height: "100%" }}
        >
          <source
            src="https://cdn.prod.website-files.com/63be8720f81b056b6775ca28/63e60d457589495064407036_Solar%20Energy%20on%20the%20farm-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
