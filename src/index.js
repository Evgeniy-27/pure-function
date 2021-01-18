/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
export default function health({ name, health }) {
  if (health > 50) {
    return 'healthy';
  }

  if ((health >= 15) && (health <= 50)) {
    return 'wounded';
  }

  if (health < 15) {
    return 'critical';
  }
}
