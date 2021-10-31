import React from 'react'
import { Text, View, Image, FlatList, ActivityIndicator, Button } from 'react-native'
import { connect } from 'react-redux'
import { loadNextPage } from '../redux/feedsReduces'
import { styles } from '../styles/style'

const FeedsScreen = (props: any) => {

    const [isLoading, setLoading] = React.useState(true);
    const [updateLoading, setUpdateLoading] = React.useState(false);
    const [isRefreshing, setIsRefreshing] = React.useState(false)
    const [data, setData] = React.useState<Array<{ id: number, download_url: string, author: string }>>([])
    const [page, setPage] = React.useState(1)

    const getPhotos = async () => {
      props.loadNextPage()
      setTimeout(async () => {
        try {
          const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
          const json = await response.json()
          setData([...data, ...json])
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
          setIsRefreshing(false)
          setUpdateLoading(false)
        }
      }, 500)
    }

    React.useEffect(() => {
      setPage(props.page)
      getPhotos()
      setPage(props.page + 1)
    }, [])

    const onBottomReached = () => {
      setUpdateLoading(true)
      setPage(page + 1)
      getPhotos()
    }

    return (
      <View style={styles.feeds_container}>
        {isLoading === true ? <ActivityIndicator style={styles.loading} size="large" color="indigo" /> : (
          <FlatList
          style={{marginBottom: 15}}
          onEndReached={onBottomReached}
          refreshing={isRefreshing}
          data={data}
          keyExtractor={({id}) => String(id)}
          renderItem={({ item }) => (
            <View style={styles.photo_container}>
              <Image source={{
                uri: item.download_url
              }} style={styles.photo} />
              <Text style={styles.photo_description}>{item.author}</Text>
            </View>
            )} />
            )}
        {updateLoading === true ? <ActivityIndicator style={styles.loading} size="small" color="yellow" /> : null}
      </View>
    )
}

type IFeedPage = {
  page: number
}

type IFeed = {
  feedPage: IFeedPage
}

const mapStateToProps = (state: IFeed) => ({
  page: state.feedPage.page
}) 

export default connect(mapStateToProps, {loadNextPage})(FeedsScreen)