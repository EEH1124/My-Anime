export default function AnimeCard({ title, year, rating}) {
    return(
     <span>
     <strong>{title}</strong>({year}) - {rating}/10
     </span>
    );
}