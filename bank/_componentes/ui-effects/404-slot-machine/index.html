import React, { useRef, useEffect } from "react";
import { Asterisk, Circle, FlagTriangleLeft, TriangleRight, Star } from "lucide-react";

export default function App() {
	const R0 = { symbol: "star", color: "red" };
	const Y0 = { symbol: "circle", color: "yellow" };
	const G0 = { symbol: "asterisk", color: "green" };
	const B0 = { symbol: "0", color: "blue" };

	const R4 = { symbol: "flag-triangle-left", color: "red" };
	const Y4 = { symbol: "right-triangle", color: "yellow" };
	const G4 = { symbol: "4", color: "green" };
	const B4 = { symbol: "4", color: "blue" };

	const duration = 6000;
	const slots = [
		{
			slot: [B4, Y4, R4, G4, B4, Y4, R4, G4, B4, Y4, R4, G4],
			duration
		},
		{
			slot: [Y0, G0, B0, R0, Y0, G0, B0, R0, Y0, G0, B0, R0],
			duration,
			delay: 100
		},
		{
			slot: [G4, R4, Y4, B4, G4, R4, Y4, B4, G4, R4, Y4, B4],
			duration,
			delay: 200
		}
	];

	return (
		<div className="app-container">
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<main>
				<h1 className="slots">
					{slots.map((slot, i) => (
						<Slot key={i + 1} {...slot} />
					))}
					<span className="slots__sr">404</span>
				</h1>
				<a className="btn-link" href="#">Go Back Home</a>
			</main>
		</div>
	);
}

function Slot({ slot, duration, delay = 0 }) {
	const slotRef = useRef(null);

	const getSymbol = (symbol) => {
		const size = { width: "1em", height: "1em" };

		switch (symbol) {
			case "asterisk":
				return <Asterisk {...size} strokeWidth={1.5} />;
			case "circle":
				return <Circle {...size} strokeWidth={2.5} />;
			case "flag-triangle-left":
				return <FlagTriangleLeft {...size} strokeWidth={2.5} />;
			case "right-triangle":
				return <TriangleRight {...size} strokeWidth={2.5} />;
			case "star":
				return <Star {...size} strokeWidth={2.5} />;
			default:
				return symbol[0];
		}
	};

	// Para um loop contínuo, adicionamos o primeiro item como sendo o último
	const slotSeamless = [...slot, slot[0]];
	
	const symbolElements = slotSeamless.map((item, index) => {
		const symbolColor = `slots__symbol--${item.color}`;
		return (
			<span
				key={`${index}-${item.symbol}`}
				className={`slots__symbol ${symbolColor}`}
			>
				{getSymbol(item.symbol)}
			</span>
		);
	});

	useEffect(() => {
		const itemCount = slotSeamless.length;
		const percent = 100 / itemCount;
		const easing = "cubic-bezier(0.45, 0, 0.55, 1.2)";
		const options = {
			delay,
			duration,
			iterations: Infinity
		};
		const rollAmount = 3;
		const stopIndexes = [];
		const translateYs = [];
		
		// Multiplicadores ou paradas de keyframe
		for (let i = 0; i < itemCount; ++i) {
			if (i % rollAmount === 0) {
				stopIndexes.push(i);
			}
		}
		
		// Keyframes baseados na porcentagem
		for (const s of stopIndexes) {
			const translateY = +(-100 + percent + percent * s).toFixed(2);
			translateYs.push(translateY, translateY);
		}
		
		// Sem primeiro keyframe duplicado
		translateYs.shift();
		
		// O último keyframe deve terminar em uma translação-y 0
		const lastKeyframe = translateYs.at(-1) || 0;
		if (lastKeyframe < 0) {
			translateYs.push(0, 0);
		}

		const animation = slotRef.current?.animate(
			translateYs.map(y => ({
				transform: `translateY(${y}%)`,
				easing
			})),
			options
		);

		return () => animation?.cancel();
	}, [delay, duration, slotSeamless.length]);

	return (
		<span className="slots__slot" aria-hidden="true">
			<span className="slots__slot-inner" ref={slotRef}>
				{symbolElements}
			</span>
		</span>
	);
}

const styles = `
* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--hue: 223deg;
	--gray1: hsl(var(--hue) 10% 95%);
	--gray2: hsl(var(--hue) 10% 85%);
	--gray3: hsl(var(--hue) 10% 75%);
	--gray8: hsl(var(--hue) 10% 25%);
	--gray9: hsl(var(--hue) 10% 15%);
	--gray10: hsl(var(--hue) 10% 5%);
	--primary3: hsl(var(--hue) 90% 75%);
	--primary5: hsl(var(--hue) 90% 55%);
	--primary6: hsl(var(--hue) 90% 45%);
	--trans-dur: 0.3s;
	color-scheme: light dark;
	font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
}

.app-container {
	background-color: light-dark(var(--gray1), var(--gray10));
	color: light-dark(var(--gray10), var(--gray1));
	font: 1em / 1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	transition: background-color var(--trans-dur), color var(--trans-dur);
	display: grid;
	place-items: center;
	min-height: 100vh;
	width: 100vw;
}

button {
	-webkit-tap-highlight-color: transparent;
	color: inherit;
	font: inherit;
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em 0;
	min-height: 100vh;
}

.btn-link {
	background-color: var(--primary5);
	border-radius: 0.25em;
	box-shadow: 0 0 0 3px transparent;
	color: var(--gray1);
	display: block;
	padding: 0.5em 1em;
	text-decoration: none;
	transition:
		background-color var(--trans-dur),
		box-shadow var(--trans-dur),
		color var(--trans-dur);
}

.btn-link:focus-visible {
	box-shadow: 0 0 0 3px var(--primary3);
}

.btn-link:hover {
	background-color: var(--primary6);
}

.slots {
	--symbol-height: 7.5em;
	font-size: 1em;
	font-weight: 700;
	gap: 1em;
	height: var(--symbol-height);
	margin-bottom: 3em;
	display: flex;
	justify-content: center;
}

.slots__slot,
.slots__sr {
	overflow: hidden;
}

.slots__slot {
	display: block;
	width: calc(var(--symbol-height) * 2 / 3);
	height: 100%;
}

.slots__slot-inner {
	display: flex;
	flex-direction: column-reverse;
}

.slots__sr {
	position: absolute;
	width: 1px;
	height: 1px;
}

.slots__symbol {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: var(--symbol-height);
	line-height: 1;
	height: 1em;
	-webkit-user-select: none;
	user-select: none;
}

.slots__symbol--red {
	color: hsl(343 90% 55%);
}

.slots__symbol--yellow {
	color: hsl(43 90% 55%);
}

.slots__symbol--green {
	color: hsl(163 90% 35%);
	font-weight: 100;
}

.slots__symbol--blue {
	color: hsl(223 90% 55%);
}
`