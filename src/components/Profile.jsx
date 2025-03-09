const user = "https://media.licdn.com/dms/image/v2/C4E03AQEsvRCzDNOi9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1645379999182?e=1747267200&v=beta&t=I4BGJ4i9PrTxsMbavtkakIkTT3JWeaLNHwJWzHKBbOw";

export default function Profile() {
    return (
        <img src={user} alt="Miguel Pitarch" className="size-40 bg-amber-400 rounded-full flex items-center justify-center" />
    )
}