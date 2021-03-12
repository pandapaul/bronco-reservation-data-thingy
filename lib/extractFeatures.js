const handleOrders = (orders = []) => {
  // FIXME assuming only 1 order
  const order = orders[0]
  // FIXME assuming only 1 entry in the order
  const entry = order.entries[0]
  const features = entry.product.features
  return features.reduce((agg, feature) => {
    return agg.concat(feature.values)
  }, [])
}

module.exports = handleOrders