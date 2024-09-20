import { UnknownTrackImageUri } from "@/constants/images";
import { TouchableOpacity, View, Text, ViewProps } from "react-native";
import FastImage from "react-native-fast-image";
import { StyleSheet } from "react-native";
import { defaultStyles } from "@/styles";
import { PlayPauseButton, SkipToNextButton, SkipToPreviousButton } from "@/components/PlayerControls";

export const FloatingPlayer = ({ style }: ViewProps) => {

    return <TouchableOpacity activeOpacity={0.9} style={[styles.container, style]}>
        <>
            <FastImage
                source={{
                    uri: UnknownTrackImageUri,
                }}
                style={styles.trackArtworkImage}
            />
            <View style={styles.trackTitleContainer}>
                <Text style={styles.trackTitle}>Title Placeholder</Text>
            </View>
            <View style={styles.trackControlsContainer}>
                <SkipToPreviousButton iconSize={22}/>
                <PlayPauseButton iconSize={24} />
                <SkipToNextButton iconSize={22} />
            </View>
        </>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
        padding: 8,
        borderRadius: 12,
        paddingVertical: 10,
    },
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10,
    },
    trackControlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16,
    },
    trackTitle: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },

})