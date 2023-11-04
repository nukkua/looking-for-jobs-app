import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { COLORS, icons, images, SIZES } from '../constants';

// To do
// i need to fix the url /job-detais/[id].js
const Home = () => {
	const router = useRouter();
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroudColor: COLORS.lightWhite
			}}
		>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lighWhite},
					headerShadowVisible: false,
					headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
					headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
					headerTitle: ''
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }} />
				<Welcome />
				<Popularjobs />
				<Nearbyjobs />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
