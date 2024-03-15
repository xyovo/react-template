/**
 * 浅比较两个值是否相等
 * 用于校验数据是否被修改场景
 * @param a
 * @param b
 * @returns 相等返回true
 */
export function shallowEqual<T>(a: T, b: T): boolean {
  // 如果 a 和 b 是相同的引用，它们肯定相等
  if (a === b) {
    return true;
  }

  // 如果 a 和 b 不是对象或数组，直接比较它们的值
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return a === b;
  }

  // 获取 a 和 b 的键
  const keysA = Object.keys(a) as (keyof T)[];
  const keysB = Object.keys(b) as (keyof T)[];

  // 如果键的数量不相等，它们肯定不相等
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 遍历键，递归比较对应的值
  for (const key of keysA) {
    if (!keysB.includes(key) || !shallowEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

/**
 * 模拟异步等待
 * @param ms 等待时长(毫秒)
 * @returns
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
