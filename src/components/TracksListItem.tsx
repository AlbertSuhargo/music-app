import { UnknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { View, TouchableHighlight, StyleSheet, Text, Image } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

export type TrackListItemProps = {
    track: { title: string; image?: string; artist?: string }
}

export const TracksListItem = ({ track }: TrackListItemProps) => {
    const isActiveTrack = false;

    return (
        <TouchableHighlight>
            <View style={styles.trackItemContainer}>
                <View>
                    <Image
                        source={{
                            uri: track.image ?? UnknownTrackImageUri,
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />
                    {/* {isActiveTrack
                        ? <LoaderKit style={styles.trackPlayingIconIndicator} name="LineScaleParty" color={colors.icon} />
                        : <Ionicons style={styles.trackPauseIconIndicator} name="play" size={24} color={colors.icon} />} */}
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{ width: '100%' }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                ...styles.trackTitleText,
                                color: isActiveTrack ? colors.primary : colors.text,
                            }}
                        >
                            {track.title}
                        </Text>
                        {track.artist && (
                            <Text
                                numberOfLines={1}
                                style={styles.trackArtistText}
                            >
                                {track.artist}
                            </Text>
                        )}
                    </View>
                    <Entypo name='dots-three-horizontal' size={18} color={colors.icon} />
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: '90%',
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    },
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20,
    },
    trackPlayingIconIndicator: {
        position: 'absolute',
        top: 10,
        left: 16,
        width: 16,
        height: 16,
    },
    trackPauseIconIndicator: {
        position: 'absolute',
        top: 14,
        left: 14,
    },
});
