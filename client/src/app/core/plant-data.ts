import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PlantData implements InMemoryDbService {
  createDb() {
    let plants = [
      {
        id: 0,
        title: 'First Plant',
        price: 24.99,
        rating: 4.3,
        shortDescription: 'This is a short description of the First Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categories: ['electronics', 'hardware'],
        image: 'https://loremflickr.com/820/320',
      },
      {
        id: 1,
        title: 'Second Plant',
        price: 64.99,
        rating: 3.5,
        shortDescription: 'This is a short description of the Second Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categories: ['books'],
        image: 'https://loremflickr.com/820/320',
      },
      {
        id: 2,
        title: 'Third Plant',
        price: 74.99,
        rating: 4.2,
        shortDescription: 'This is a short description of the Third Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categories: ['electronics'],
        image: 'https://loremflickr.com/820/320',
      },
      {
        id: 3,
        title: 'Fourth Plant',
        price: 84.99,
        rating: 3.9,
        shortDescription: 'This is a short description of the Fourth Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categories: ['hardware'],
        image: 'https://loremflickr.com/820/320',
      },
      {
        id: 4,
        title: 'Fifth Plant',
        price: 94.99,
        rating: 5,
        shortDescription: 'This is a short description of the Fifth Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categories: ['electronics', 'hardware'],
        image: 'https://loremflickr.com/820/320',
      },
      {
        id: 5,
        title: 'Sixth Plant',
        price: 54.99,
        rating: 4.6,
        shortDescription: 'This is a short description of the Sixth Plant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        categories: ['books'],
        image: 'https://loremflickr.com/820/320',
      },
    ];
    return { plants: plants };
  }
}
