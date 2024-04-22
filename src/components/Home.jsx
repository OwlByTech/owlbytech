import { defaultLanguage } from "../services/LanguageStore";
import { useStore } from "@nanostores/react";
import { home } from "../services/api";
import directus from "../lib/directus";

export default function Home() {
	const $defaultLanguage = useStore(defaultLanguage)
	return (
		<div>
			<p>{$defaultLanguage}</p>
			{home.filter(data => data.languages_code === $defaultLanguage).map(data => (
				<div>
					<span>{data.header_title}</span>
					<img src={`${directus.url}assets/${data.header_logo}?width=80`} alt="" />
					<h1>{data.home_maintext}</h1>
					<p>{data.home_subtext}
					</p>

				</div>
			))
			}
		</div>
	)

}