export default function Dashboard(){
    return (
        <section className="relative h-screen w-full overflow-hidden">
      {/* Video de Fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none md:block hidden"
      >
        <source src="videos/dashboardBG.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex h-full items-between p-5 justify-center md:bg-black/40">
        <h1 className="text-white text-6xl font-bold">Welcome to My Supermarket</h1>
        
      </div>
    </section>
    );
}