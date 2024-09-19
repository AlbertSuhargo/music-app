import { FlatList, FlatListProps, View } from "react-native"
import library from "@/assets/data/library.json"
import { TracksListItem } from "./TracksListItem"
import { utilsStyles } from "@/styles"

export type TracksListProps = Partial<FlatListProps<unknown> & {
    tracks: any[]
}>

const ItemDivider = () => (
    <View style={{
        ...utilsStyles.itemSeparator,
        marginVertical: 9, marginLeft: 60
    }}></View>
)

export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) =>
                <TracksListItem
                    track={{
                        ...track,
                        image: track.artwork,
                    }}
                />
            }
            {...flatlistProps}
        />
    )
}