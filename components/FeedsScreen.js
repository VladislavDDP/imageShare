import React from 'react';
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';

const FeedsScreen = (props) => {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const getPhotos = async () => {
        try {
        const response = await fetch('https://picsum.photos/v2/list');
        const json = await response.json();
        setData(json);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
      }
    }

    React.useEffect(() => {
    getPhotos();
    }, []);

    return (
        <View style={{ flex: 1,
            justifyContent: 'center',
            backgroundColor: '#664E88',
            alignItems: 'center' }}>
          {isLoading === true ? <ActivityIndicator size="large" color="#00ff00" /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                  <Image source={{
                      uri: item.download_url
                  }} style={{
                      width: 320,
                      height: 100,
                      borderRadius: 20,
                      margin: 10
                  }} />
                  <Text style={{margin: 2, width: 90}}>{item.author}</Text>
              </View>
              )}
            />
          )}
        </View>)
}

export default FeedsScreen