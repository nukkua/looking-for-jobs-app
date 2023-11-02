import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectJob, handleCardPress }) => {
	return (
		<View style={{ borderWidth: 1, padding: 10 }}>
			<Text>{item.employer_name}</Text>
			<Text>{item.job_title}</Text>
		</View>
		// <TouchableOpacity style={styles.container(selectJob, item)}>
		// 	<TouchableOpacity style={styles.logoContainer(selectJob, item)}>
		// 		<Image source={{ uri: item.employer_logo }} resizeMode="contain" style={styles.logoImage} />
		// 	</TouchableOpacity>
		// 	<Text style={styles.companyName} numberOfLines={1}>
		// 		{item.employer_name}
		// 	</Text>
		// 	<View style={styles.infoContainer}>
		// 		<Text style={styles.jobName(selectJob, item)} numberOfLines= {1}>{item.job_title}</Text>
		// 		<Text style={styles.location}>{item.job_country}</Text>
		// 	</View>
		// </TouchableOpacity>
	);
};

export default PopularJobCard;
