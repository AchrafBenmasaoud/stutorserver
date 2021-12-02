import { StutorCard } from '@components/cards'
import { Button, SearchBar, Title } from '@components/general'
import { ScreenContainer, ScreenWrapper } from '@components/layout'
import * as React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { color } from '@/theme'

// dummy data
const MyLessons = [
  {
    id: 1221,
    user: {
      name: 'Maurits Arissen',
    },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    costs: 20,
    rating: 4,
    duration: '30 min',
  },
  {
    id: 1222,
    user: {
      name: 'Daan Franssen',
    },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    costs: 20,
    rating: 4,
    duration: '30 min',
  },
  {
    id: 1223,
    user: {
      name: 'Bart van Tongeren',
    },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    costs: 20,
    rating: 4,
    duration: '30 min',
  },
  {
    id: 1224,
    user: {
      name: 'Daan Franssen',
    },
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    costs: 20,
    rating: 4,
    duration: '30 min',
  },
]

export const MyLessonsScreen = () => {
  return (
    <ScreenContainer>
      <ScreenWrapper>
        <SafeAreaView>
          <Title value="Mijn bijlessen" fontFamily="Lato-Black" fontSize={26} />
          <SearchBar />
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {MyLessons.map((item) => (
            <StutorCard
              key={item.id}
              name={item.user.name}
              description={item.description}
              costs={item.costs}
              rating={item.rating}
              duration={item.duration}
              hasDetails
            />
          ))}
        </ScrollView>
      </ScreenWrapper>
      <Button floatable>
        <Title
          value="Maak nieuwe bijles"
          fontFamily="Lato-Bold"
          color={color.white}
          fontSize={17}
        />
      </Button>
    </ScreenContainer>
  )
}
