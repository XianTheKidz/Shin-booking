import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {assets, facilityIcons, roomCommonData, roomsDummyData} from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [guests, setGuests] = useState(1);

    useEffect(() => {
  const selectedRoom = roomsDummyData.find((item) => item._id === id);
  

    if (selectedRoom) {
        setRoom(selectedRoom);
        setMainImage(selectedRoom.images[0]);
    }
    }, [id]);

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* ---------- Room Header ---------- */}
    <div className="flex flex-col gap-5">

    <div className="flex flex-wrap items-center gap-3">

        <h1 className="font-playfair text-4xl md:text-5xl animated-gradient-text">
        {room.roomType}
        </h1>

        <span className="rounded-full bg-cyan-600 px-4 py-1 text-xs font-semibold text-white">
        {room.tag}
        </span>

    </div>

    <p className="max-w-3xl text-gray-500 dark:text-gray-400">
    {room.description}
    </p>

    <div className="flex flex-wrap items-center gap-3">

        <StarRating rating={room.rating} />

        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
        {room.rating.toFixed(1)}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
        {room.reviews} {room.reviews === 1 ? "review" : "reviews"}
        </span>

    </div>

    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

        <img
        src={assets.locationIcon}
        alt="location"
        className="h-5 w-5 dark:invert"
        />

        <span>{room.hotel.address}</span>

    </div>

    </div>
        {/* ---------- Room Images ---------- */}
    <div className="mt-8 grid gap-5 lg:grid-cols-5">

    {/* Main Image */}
    <div className="lg:col-span-3">
        <img
        src={mainImage}
        alt={room.roomType}
        className="h-130 w-full rounded-2xl object-cover shadow-lg"
        />
    </div>

    {/* Thumbnails */}
    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
        {room.images
        .filter((image) => image !== mainImage)
        .slice(0, 4)
        .map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`${room.roomType} ${index + 1}`}
            onClick={() => setMainImage(image)}
            className="h-62.5 w-full cursor-pointer rounded-xl object-cover transition hover:scale-[1.02] hover:shadow-lg ring-2 ring-transparent hover:ring-cyan-500"
            />
        ))}
    </div>

    </div>

    {/* ---------- Room Highlights ---------- */}
    <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

    <div>

        <h2 className="font-playfair text-3xl text-gray-900 dark:text-white">
        {room.amenitiesTitle}
        </h2>

        <p className="mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
        {room.amenitiesDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

        {room.amenities.map((item, index) => (
            <div
            key={index}
            className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-800"
            >
            <img
                src={facilityIcons[item]}
                alt={item}
                className="h-5 w-5 dark:invert"
            />

            <span className="text-sm text-gray-700 dark:text-gray-300">
                {item}
            </span>
            </div>
        ))}

        </div>

    </div>

    <div className="rounded-2xl bg-cyan-50 p-6 shadow-lg dark:bg-slate-900">

        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Starting From
        </p>

        <h2 className="mt-2 text-4xl font-bold text-cyan-700 dark:text-cyan-400">
        MMK {room.pricePerNight.toLocaleString()}
        </h2>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
        per night
        </p>

    </div>

    </div>

    {/* ---------- Booking Card ---------- */}
    <form
    className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
    <div className="grid gap-6 lg:grid-cols-4">

        {/* Check In */}
        <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Check In
        </label>

        <input
            type="date"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition
            focus:border-cyan-500
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:scheme-dark"
        />
        </div>

        {/* Check Out */}
        <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Check Out
        </label>

        <input
            type="date"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition
            focus:border-cyan-500
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:scheme-dark"
        />
        </div>

        {/* Guests */}
        <div className="lg:max-w-45">
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Guests
        </label>

        <div className="flex h-13 items-center justify-between rounded-xl border border-slate-300 bg-white px-4 dark:border-slate-700 dark:bg-slate-800">

            <button
            type="button"
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="text-xl font-semibold text-cyan-600 hover:text-cyan-700"
            >
            −
            </button>

            <span className="text-base font-medium text-gray-900 dark:text-white">
            {guests}
            </span>

            <button
            type="button"
            onClick={() => setGuests(guests + 1)}
            className="text-xl font-semibold text-cyan-600 hover:text-cyan-700"
            >
            +
            </button>

        </div>
        </div>

        {/* Button */}
        <div className="flex items-end">
        <button
            type="submit"
            className="w-full rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700 active:scale-95"
        >
            Reserve Now
        </button>
        </div>

    </div>
    </form>

    {/* ---------- Why Guests Love This Room ---------- */}
    <div className="mt-20">

    <h2 className="mb-8 font-playfair text-3xl text-gray-900 dark:text-white">
        Why Guests Love This Room
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

        {roomCommonData.map((spec, index) => (
        <div
            key={index}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
        >
            <img
            src={spec.icon}
            alt={spec.title}
            className="h-10 w-10 dark:invert dark:brightness-0 dark:contrast-200"
            />

            <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
                {spec.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {spec.description}
            </p>
            </div>
        </div>
        ))}

    </div>

    </div>

    {/* ---------- About This Room ---------- */}
    <div className="my-20 rounded-3xl bg-cyan-50 p-8 dark:bg-slate-900">

    <h2 className="font-playfair text-3xl text-gray-900 dark:text-white">
        About This Room
    </h2>

    <p className="leading-8 text-gray-600 dark:text-gray-400">
    {room.about}
    </p>

    </div>

    {/* ---------- Host ---------- */}
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">

    <h2 className="mb-6 font-playfair text-3xl text-gray-900 dark:text-white">
        Your Host
    </h2>

    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">

        <img
        src={assets.hostImage}
        alt="Host"
        className="h-24 w-24 rounded-full object-cover ring-4 ring-cyan-200 shadow-md"
        />

        <div className="flex-1">

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {room.hostTitle}
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
        {room.hostDescription}
        </p>

        <div className="mt-4 flex items-center gap-3">

            <StarRating rating={room.rating} />

            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
            {room.rating.toFixed(1)}
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400">
            {room.reviews} reviews
            </span>

        </div>

        </div>

    </div>

    </div>
    </div>
  )
}

export default RoomDetails