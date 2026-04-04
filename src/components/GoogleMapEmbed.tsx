export function GoogleMapEmbed({
  height = "300",
  className = "",
}: {
  height?: string;
  className?: string;
}) {
  return (
    <div className={`w-full overflow-hidden rounded-xl ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.8!2d-96.7677!3d32.9601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f5b35f8ccc1%3A0x3b9e2b8e1c8e8f0!2sBuchwald%20Family%20Dentistry%20%26%20Orthodontics!5e0!3m2!1sen!2sus!4v1700000000000"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Buchwald Family Dentistry location - 300 N Coit Rd #245, Richardson, TX 75080"
      />
    </div>
  );
}
