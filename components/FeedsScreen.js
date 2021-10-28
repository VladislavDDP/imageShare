import React from 'react';
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loadNextPage } from '../redux/feedsReduces';

const FeedsScreen = (props) => {
    const [isLoading, setLoading] = React.useState(true);
    const [isRefreshing, setIsRefreshing] = React.useState(false)
    const [data, setData] = React.useState([]);

    const getPhotos = async () => {
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
        setIsRefreshing(false)
      }
    }

    React.useEffect(() => {
      getPhotos();
    }, []);

    const onRefresh = () => {
      setIsRefreshing(true)
      props.loadNextPage()
      getPhotos()
  }

    return (
        <View style={{ 
            flex: 1,
            backgroundColor: '#664E88'}}>
          {isLoading === true ? <ActivityIndicator size="large" color="indigo" /> : (
          <FlatList
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{marginBottom: 10, marginLeft: 0, marginRight: 20}}>
                  <Image source={{
                      uri: item.download_url
                  }} style={{
                      width: '100%',
                      height: 200,
                      borderRadius: 10,
                      margin: 10,
                      marginBottom: -30
                  }} />
                  <Text style={{width: '100%',
                                padding: 10,
                                position: 'relative',
                                color: '#fff',
                                backgroundColor: '#bebebe',
                                marginLeft: 10,
                                borderRadius: 10}}>{item.author}</Text>
              </View>
              )}
            />
          )}
        </View>)
}

const mapStateToProps = (state) => ({}) 

export default connect(mapStateToProps, {loadNextPage})(FeedsScreen)