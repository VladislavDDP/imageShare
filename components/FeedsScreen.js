import React from 'react'
import { Text, View, Image, FlatList, ActivityIndicator, Button } from 'react-native'
import { connect } from 'react-redux'
import { loadNextPage } from '../redux/feedsReduces'
import { styles } from '../styles/style'

const FeedsScreen = (props) => {
    const [isLoading, setLoading] = React.useState(true);
    const [isRefreshing, setIsRefreshing] = React.useState(false)
    const [data, setData] = React.useState([])
    const [page, setPage] = React.useState(1)

    const getPhotos = async () => {
      props.loadNextPage()
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
        setIsRefreshing(false)
      }
    }

    React.useEffect(() => {
      setPage(props.page)
      getPhotos()
      setPage(props.page + 1)
    }, [])

    const onRefresh = () => {
      setIsRefreshing(true)
      setPage(page + 1)
      getPhotos()
    }

    // loading new posts for web browser with button
    // const loadNextPicsWeb = () => {
    //   setPage(props.page + 1)
    //   getPhotos()
    // }

    return (
      <View style={styles.feeds_container}>
        {isLoading === true ? <ActivityIndicator size="large" color="indigo" /> : (
          <FlatList
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.photo_container}>
              <Image source={{
                uri: item.download_url
              }} style={styles.photo} />
              <Text style={styles.photo_description}>{item.author}</Text>
            </View>
            )} />
        )}
        {/* <Button title='load more' onPress={loadNextPicsWeb} /> */}
      </View>
    )
}

const mapStateToProps = (state) => ({
  page: state.feedPage.page
}) 

export default connect(mapStateToProps, {loadNextPage})(FeedsScreen)