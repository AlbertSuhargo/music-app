import { TouchableOpacity, View, ViewStyle } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/constants/tokens";

type PlayerControlsProps = {
    style?: ViewStyle
}

type PlayerButtonProps = {
    style?: ViewStyle
    iconSize?: number
}

export const PlayPauseButton = ({ style, iconSize }: PlayerButtonProps) => {
    const playing = true

    const displayedTrack = playing ?? {
        title: 'Placeholder Track'
    }

    return <View style={[{ height: iconSize }, style]}>
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome name={playing ? 'pause' : 'play'} size={iconSize} colors={colors.text}></FontAwesome>
        </TouchableOpacity>
    </View>
}

export const SkipToNextButton = ({iconSize=30}: PlayerButtonProps) =>{
    return <TouchableOpacity activeOpacity={0.7}>
        <FontAwesome6 name='forward' size={iconSize} color={colors.text}/>
    </TouchableOpacity>
}

export const SkipToPreviousButton = ({iconSize=30}: PlayerButtonProps) =>{
    return <TouchableOpacity activeOpacity={0.7}>
        <FontAwesome6 name='backward' size={iconSize} color={colors.text}/>
    </TouchableOpacity>
}