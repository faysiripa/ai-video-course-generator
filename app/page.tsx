import CourseList from "./_components/CourseList";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<CourseList />


			<div className="absolute -bottom-40 -left-40
 h-125 w-125 bg-purple-400/20 blur-[120px] rounded-full" />
			<div className="absolute top-20 left-1/3 -bottom-50
 h-125 w-125 bg-pink-400/20 blur-[120px] rounded-full" />
			<div className="absolute -bottom-50 left-1/3
 h-125 w-125 bg-blue-400/20 blur-[120px] rounded-full" />
			<div className="absolute top-50 left-1/2
 h-125 w-125 bg-sky-400/20 blur-[120px] rounded-full" />


		</div>
	);
}
