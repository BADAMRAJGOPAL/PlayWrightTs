import { test} from '@playwright/test';

export async function step<T>(
  stepName: string,
  action: () => Promise<T>
): Promise<T> {

  return await test.step(stepName, async () => {
    try {
      return await action();
    } catch (error) {
      throw error;
    }
  });
}