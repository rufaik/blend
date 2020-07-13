import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext'
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
	const { state: { name, recording, locations },
		startRecording, 
		stopRecording, 
		changeName 
	} = useContext(LocationContext)

	const [saveTrack] = useSaveTrack();

	return( 
		<>
			<Input value={name} onChangeText={changeName} placeholder="Enter name" />
			<Spacer>
				{ recording 
					? <Button title="Stop" onPress={stopRecording} />
					: <Button title="Start Cooking" buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} onPress={startRecording} />
				}
			</Spacer>
			<Spacer>
				{
					!recording && locations.length
					? (<Button title="Save Recording" buttonStyle={{backgroundColor: 'black', fontSize: 18, padding: 15, width: 250, borderRadius: 30}} onPress={saveTrack} />
					) : null
				}
			</Spacer>
		</>
		);
};

export default TrackForm;