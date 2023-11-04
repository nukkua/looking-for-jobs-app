import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import { useRouter } from 'expo-router';

import { useState } from 'react';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hooks/useFetch';

const Popularjobs = () => {
	const [selectedJob, setSelectedJob] = useState();
	const router = useRouter();
	const { data, isLoading, error } = useFetch('search', {
		query: 'React Developer',
		page: '1',
		num_pages: '1'
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all </Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" colors={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong!</Text>
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<PopularJobCard
								item={item}
								handleCardPress={() => {
									setSelectedJob(item.job_id); 
									router.push(`/job-details/${item.job_id}`);
								}}
								selectJob = {selectedJob}
							/>
						)}
						keyExtractor={(item) => item?.job_id.toString()}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	);
};

export default Popularjobs;
