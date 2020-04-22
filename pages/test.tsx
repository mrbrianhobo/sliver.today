import React from 'react';
import Layout from '../components/Layout';
import EmojiGrid from '../components/EmojiGrid';
import { Card } from 'theme-ui';
import emojify from '../src/utils/emojify';

const a = "Roma Tomatoes, Dino Kale, Mozzarella, Asiago Fresh Cheese Blend, Fresh Herbs, and Thyme Infused Garlic Olive Oil.";
const b = "Corn, Chile Pasilla, Red Bell Peppers, Mozzarella, Bulgarian Feta Cheese, Lemon Zest-Cilantro and Garlic Olive Oil.";
const c = "Assorted Organic Heirloom Tomatoes, Cremini Mushroom, Mozzarella, French Feta Cheese Topped with Avocado Spread"
console.log(emojify(a));
console.log(emojify(b));
console.log(emojify(c));

const TestPage: React.FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Test</h1>
    <p>This is the test page</p>
    <Card p={1}>
      <EmojiGrid />
    </Card>
  </Layout>
)

export default TestPage;